# Bookstore

Esse projeto é um ecommerce de livros que desenvolvi tanto o front-end quanto o back-end.

Inicialmente era apenas um projeto de consumo básico de api baseado em um teste técnico que encontrei, mas no meio do processo decidi aprimorar e criar minha própria API e interface front-end.

A ideia inicial é fazer uma interface simples, apenas para demonstrar as funcionalidades implementadas.

## Hospedagem

Esse projeto está hospedado na vercel - confira nesse link:
[BookStore](https://frontend-ecommerce-books.vercel.app/)

## Funcionalidades

### Home

Na home são exibidas prévias de livros mais recentes, com acesso rápido para o catálogo completo.

### Catálogo (Ver todos)

Existe uma página dedicada para visualizar todos os livros com busca por título/autor e paginação.

### Login

Tela de login e register onde o usuário pode criar sua conta e fazer o login em seguida.

### Rotas protegidas

As rotas de checkout e de perfil exigem autenticação. Se o usuário não estiver logado, é redirecionado para login.

### Criar Livros

Qualquer usuário logado pode criar livros no sistema.

### Meus livros

Cada usuário tem uma tela onde pode ver/editar os livros que ele cadastrou.

### Endereços

Na área de perfil, é possível listar, criar e editar endereços. O formulário também possui preenchimento automático por CEP.

### Ver detalhes

Clicando na capa de algum livro na home te encaminha para uma pagina com o detalhes do livro, onde você consegue ver os comentários sobre aquele livro e (se estiver logado) adicionar seu próprio comentário com sua nota que pode ser de 1 até 5 estrelas.

### Comentários

Caso esteja logado vai aparecer um pequeno formulário onde é possível criar um comentário e adicionar uma nota.

Caso encontre um comentário que você fez aparece botões de editar e excluir.

### Carrinho

É possível adicionar livros ao carrinho pela tela de detalhes e pela listagem de livros. Também existe a ação de "comprar agora", que leva direto para o fluxo de checkout.

No carrinho, o usuário pode aumentar/diminuir quantidade dos itens e remover livros.

### Checkout

O checkout está dividido em três partes:

- Resumo dos itens (com subtotais, frete, taxas e total)
- Seleção de endereço de entrega (incluindo seleção de endereço padrão do carrinho e criação de novo endereço)
- Seleção de método de pagamento (cartão ou Pix)

Se não houver itens no carrinho, o usuário é redirecionado para a home.

## Fluxo de compra

1. O usuário adiciona o livro ao carrinho ou usa "comprar agora".
2. No checkout, revisa os itens e ajusta quantidades.
3. Seleciona ou cadastra o endereço de entrega.
4. Escolhe o método de pagamento.
5. Finaliza o pedido (etapa final ainda em evolução).

## Funcionalidades em desenvolvimento

### Finalização de pagamento

A estrutura de checkout já está implementada, mas a etapa final de conclusão do pagamento ainda está em desenvolvimento.
