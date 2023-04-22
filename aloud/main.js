const produtosEl = document.querySelector('#produtos')

const getProdutosFromBackend = async () => {
  const res = await fetch('http://localhost:5000/produtos')
  const data = await res.json()
  return data
}

const addProdutosToDom = async () => {
  const produtos = await getProdutosFromBackend()

  produtos.forEach((produto) => {
    const div = document.createElement('div')
    div.className = 'produto'
    div.innerHTML = `
      <h3>${produto.title}</h3>
      <div class="tags">${produto.tags}</div>
    `
    produtosEl.appendChild(div)
  })
}

addProdutosToDom()