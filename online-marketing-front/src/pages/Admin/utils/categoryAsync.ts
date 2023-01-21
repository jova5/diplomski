import {Category} from "../../../dto/Category";
import {setOpenDelete, setPendingAdd, setPendingDelete, setPendingEdit} from "../stores/modalStore";
import {categories, renderedCategories, setCategories, setRenderedCategories} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {translate} from "../../../utils/languageAsync";
import {CategoryRequest} from "../../../dto/CategoryRequest";

async function getCategories(): Promise<Category[]> {
  return (await fetch('http://127.0.0.1:8080/category', {method: 'GET'})).json();
}

async function addCategory(category: CategoryRequest): Promise<any> {
  setPendingAdd(true);
  await fetch('http://127.0.0.1:8080/category',
    {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRenderedCategories(
        produce((categoryList) => {
          categoryList.push({
            id: data.id,
            name: data.name,
          });
        })
      );
      setCategories(
        produce((categoryList) => {
          categoryList.push({
            id: data.id,
            name: data.name,
          });
        })
      );
      setPendingAdd(false);
    })
    .catch(() => {
      setPendingAdd(false);
      alert(translate("errorAdd"));
    })
}

async function updateCategory(category: CategoryRequest, categoryId: number): Promise<any> {
  setPendingEdit(true);
  fetch(`http://127.0.0.1:8080/category/${categoryId}`,
    {
      method: 'PUT',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setRenderedCategories(
          category => category.id === categoryId,
          produce((category: any) => {
            category.name = data.name;
          }),
        );
        setPendingEdit(false);
      }
    )
    .catch(() => {
      setPendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function deleteCategory(id: number): Promise<any> {
  setPendingDelete(true);
  await fetch(`http://127.0.0.1:8080/category/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      setRenderedCategories(renderedCategories.filter((item) => item.id !== id));
      setCategories(categories.filter((item) => item.id !== id));
      setPendingDelete(false);
      setOpenDelete(false);
    })
    .catch(() => {
      setPendingDelete(false);
      alert(translate("errorDelete"));
    })
}

export {getCategories, addCategory, updateCategory, deleteCategory};
