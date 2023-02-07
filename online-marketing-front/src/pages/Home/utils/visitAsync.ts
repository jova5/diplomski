async function visitStoreAsync(storeId: number): Promise<any> {
  await fetch(`http://127.0.0.1:8080/visit/store/${storeId}`,
    {
      method: 'PUT',
    })
}

async function visitAddAsync(addId: number): Promise<any> {
  await fetch(`http://127.0.0.1:8080/visit/add/${addId}`,
    {
      method: 'PUT',
    })
}

export {visitAddAsync, visitStoreAsync};
