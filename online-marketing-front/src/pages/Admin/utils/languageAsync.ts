import {
  availableLanguages,
  renderedLanguageList,
  setAvailableLanguages,
  setRenderedLanguageList
} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {VocabularyRequest} from "../../dto/VocabularyRequest";

async function getLanguagesForTable(): Promise<any> {
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
          return {id: value.id, key: value.key, shortName: item.shortName, meaning: value.meaning}
        })
      });
      let resultLanguageList: any[] = [];
      for (let i = 0; i < pom.length; i++) {
        resultLanguageList = resultLanguageList.concat(pom[i]);
      }
      resultLanguageList = resultLanguageList.sort((a, b) => a.id - b.id);
      setRenderedLanguageList(resultLanguageList);
      return resultLanguageList;
    })
}

async function addSyntax(vocabulary: VocabularyRequest, languageId: number): Promise<any>{
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
          produce((todos) => {
            todos.push({
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

export {getLanguagesForTable, addSyntax, deleteSyntax};
