import {availableLanguages, renderedLanguageList, setLanguages, setRenderedLanguageList} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {VocabularyRequest} from "../../../dto/VocabularyRequest";
import {translation} from "../../../stores/languageStore";
import {
  setOpenDeleteSyntaxModal,
  setPendingAddSyntax,
  setPendingDeleteSyntax,
  setPendingEditSyntax
} from "../stores/modalStore";

async function getLanguages(): Promise<any[]> {
  return await fetch('http://127.0.0.1:8080/language', {method: 'GET',})
    .then(res => res.json())
    .then(data => {
      return data.map((item: any) => {
        return {
          id: item.id,
          longName: item.longName,
          shortName: item.shortName
        }
      });
    });
}

async function getLanguagesForTable(): Promise<any[]> {
  let resultLanguageList: any[] = [];
  await fetch('http://127.0.0.1:8080/language', {method: 'GET',})
    .then(res => res.json())
    .then(data => {
      const pom = data.map((item: any) => {
        return item.vocabularies.map((value: any) => {
          return {
            id: value.id,
            key: value.key,
            shortName: item.shortName,
            meaning: value.meaning,
            languageId: item.id
          }
        })
      });

      for (let i = 0; i < pom.length; i++) {
        resultLanguageList = resultLanguageList.concat(pom[i]);
      }
      resultLanguageList = resultLanguageList.sort((a, b) => a.id - b.id);
    })
  return resultLanguageList;
}

async function addSyntax(vocabulary: VocabularyRequest, languageId: number): Promise<any> {
  setPendingAddSyntax(true);
  fetch('http://127.0.0.1:8080/vocabulary',
    {
      method: 'POST',
      body: JSON.stringify(vocabulary),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setRenderedLanguageList(
          produce((syntaxList) => {
            syntaxList.push({
              id: data.id,
              key: data.key,
              meaning: data.meaning,
              shortName: availableLanguages().find((item) => item.id === languageId).shortName
            });
          }),
        );
        setLanguages(renderedLanguageList);
        setPendingAddSyntax(false);
      }
    )
    .catch(() => {
      setPendingAddSyntax(false);
      alert(translate("errorAdd"));
    })
}

async function deleteSyntax(id: number): Promise<any> {
  setPendingDeleteSyntax(true);
  await fetch(`http://127.0.0.1:8080/vocabulary/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      const temporaryList = renderedLanguageList.filter((item) => item.id !== id)
      setRenderedLanguageList(temporaryList);
      setLanguages(renderedLanguageList);
      setPendingDeleteSyntax(false);
      setOpenDeleteSyntaxModal(false);
    })
    .catch(() => {
      setPendingDeleteSyntax(false);
      alert(translate("errorDelete"));
    })
}

async function updateSyntax(vocabulary: VocabularyRequest, vocabularyId: number): Promise<any> {
  setPendingEditSyntax(true);
  fetch(`http://127.0.0.1:8080/vocabulary/update/${vocabularyId}`,
    {
      method: 'PUT',
      body: JSON.stringify(vocabulary),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setRenderedLanguageList(
          syntax => syntax.id === data.id,
          produce((syntax: any) => {
            syntax.key = data.key;
            syntax.meaning = data.meaning;
          }),
        );
        setPendingEditSyntax(false);
      }
    )
    .catch(() => {
      setPendingEditSyntax(false);
      alert(translate("errorUpdate"));
    })
}

async function getTranslation(languageId: number): Promise<any[]> {
  const {vocabularies} = await fetch(`http://127.0.0.1:8080/language/${languageId}`, {method: 'GET'})
    .then(res => res.json());
  return vocabularies;
}

export const translate = (key: string): string => {
  const temporaryItem = translation()?.find((item) => item.key === key);
  if (temporaryItem)
    return temporaryItem.meaning;
  return `${key}`;
}

export {getLanguages, getLanguagesForTable, addSyntax, deleteSyntax, updateSyntax, getTranslation};
