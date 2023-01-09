import {
  availableLanguages,
  renderedLanguageList,
  setAvailableLanguages,
  setRenderedLanguageList
} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {VocabularyRequest} from "../../../dto/VocabularyRequest";

async function getLanguagesForTable(): Promise<any[]> {
  let resultLanguageList: any[] = [];
  await fetch('http://127.0.0.1:8080/language', {method: 'GET',})
    .then(res => res.json())
    .then(data => {
      const availableLanguages = data.map((item: any) => {
        return {
          id: item.id,
          longName: item.longName,
          shortName: item.shortName
        }
      });
      setAvailableLanguages(availableLanguages);

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
      setRenderedLanguageList(resultLanguageList);

    })
  return resultLanguageList;
}

async function addSyntax(vocabulary: VocabularyRequest, languageId: number): Promise<any> {
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
        )
      }
    )
}

async function deleteSyntax(id: number): Promise<any> {
  await fetch(`http://127.0.0.1:8080/vocabulary/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      const temporaryList = renderedLanguageList.filter((item) => item.id !== id)
      setRenderedLanguageList(temporaryList);
    })
}

async function updateSyntax(vocabulary: VocabularyRequest, vocabularyId: number): Promise<any> {
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
      }
    )
}

export {getLanguagesForTable, addSyntax, deleteSyntax, updateSyntax};
