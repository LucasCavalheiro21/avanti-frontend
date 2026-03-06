# 📚 Banco de Trocas de Conhecimento

![Status](https://img.shields.io/badge/Status-em_desenvolvimento-orange)
![License](https://img.shields.io/badge/License-proprietary-red)

## 📌 Introdução

O **Banco de Trocas de Conhecimento** é uma aplicação web desenvolvida como proposta do curso de **Desenvolvimento Full Stack** da **Escola Atlântico Avanti**.

A plataforma surge como uma solução para a dificuldade enfrentada por pessoas que desejam aprender novas habilidades sem recursos financeiros, conectando-as a indivíduos dispostos a compartilhar seus conhecimentos de forma colaborativa e gratuita. O objetivo é democratizar o acesso ao aprendizado através da tecnologia.

---

## ⚠️ Problematização

Atualmente, a troca de conhecimentos ocorre de forma desorganizada em grupos de mensagens ou redes sociais. Isso gera:

* ❌ Falta de centralização das informações;
* ❌ Dificuldade de filtrar conteúdos específicos (por nível ou categoria);
* ❌ Perda de histórico das ofertas disponíveis;
* ❌ Comunicação ineficiente entre mentor e aluno.

Nossa solução visa **estruturar** essa conexão.

---

## 🎯 Objetivos

### Objetivo Geral

Desenvolver uma aplicação web funcional (Full Stack) que permita o **cadastro, visualização e gerenciamento** de ofertas de conhecimento.

### Objetivos Específicos

* ✅ **Cadastro de Usuários:** Registrar pessoas dispostas a compartilhar conhecimento.
* ✅ **Gestão de Ofertas:** Criar, editar e remover ofertas de ensino.
* ✅ **Busca Inteligente:** Filtrar conhecimentos por categoria e nível de dificuldade.
* ✅ **Interface Amigável:** Design intuitivo desenvolvido em ReactJS.

---

## ⚙️ Funcionalidades do Sistema

O escopo do sistema abrange:

1.  **Módulo de Pessoas:** Cadastro completo com nome, e-mail, telefone e bio.
   
2.  **Módulo de Conhecimentos:**
    * Cadastro de oferta (Título, Descrição, Categoria, Nível).
    * Associação automática com o usuário responsável.
  
3.  **Visualização:** Listagem de cards com detalhes da oferta.
   
4.  **Filtros Avançados:** Busca por Categoria (ex: Tecnologia, Música) e Nível (Básico, Avançado).

---

## 🛠️ Stacks e Tecnologias

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

## 🚀 Como rodar o projeto

### 🔧 Instalação e Configuração

#### 1. Clone o repositório

No terminal, navegue até a pasta onde deseja salvar o projeto e execute:

```bash
git clone https://github.com/isaias30silva/avanti-dfs-02.git
```

#### 2. Acesse a pasta do projeto

Entre na pasta raiz do repositório clonado:

```bash
cd avanti-dfs-02
```

#### 3. Acesse o diretório do Back-End

As configurações do servidor estão na pasta Back-End. Navegue até ela:

```bash
cd frontend
```

#### 4. Instale as dependências

Execute o comando abaixo para instalar todas as bibliotecas necessárias listadas no package.json:

```bash
npm install
```

#### 4. Executando o Projeto

Com tudo configurado, inicie o servidor:

```bash
npm run dev
```

Acesse em: http://localhost:5173

---

## Backend necessário

Este front-end se comunica com uma **API REST** 

Certifique-se de que o back-end esteja funcionando corretamente antes de usar o app.

🔗 Repositório da API no GitHub: [backend](https://github.com/LucasCavalheiro21/avanti-dfs-02.git)

---

## 👥 Equipe de Desenvolvimento

[@Lucas Cavalheiro](https://github.com/LucasCavalheiro21)
- Desenvolvimento de motores de filtragem dinâmica para otimizar a localização de registros na aplicação.
- Responsável pela manutenção e estruturação do arquivo README, garantindo clareza na comunicação do projeto e das contribuições.

[@Isaias Menezes Silva](https://github.com/isaias30silva)
- Inicialização do repositório frontend e configuração do Axios para consumo da API REST.
- Implementação da estrutura base da Home Page e da página de fluxo para Cadastro de Pessoas.

[@Matheus da Silva Carvalho](https://github.com/mc4rvalho)
- Desenvolvimento do módulo de criação, edição e exlusão, incluindo validação de campos.
- Implementação de lógica para exibição limitada de usuários na Home Page, utilizando componentes de carrossel/slider para melhorar a navegação e a performance de carregamento.

[@Pedro Fernandes](https://github.com/pedrofernandesx)
- Criação do componente de "Card" para ofertas, garantindo a exibição dinâmica de metadados (Título, Categoria e Nível).
- Implementação de gerador de avatares aleatórios para preenchimento visual de perfis, assegurando uma interface rica mesmo em ambientes de teste.

[@Giselle Thamyris Oliveira de Morais](https://github.com/giswolfie)
- Responsável pela concepção visual e definição do layout de todas as páginas da aplicação, garantindo a fidelidade visual entre as telas e a experiência do usuário.

---

## © Direitos Autorais

Este software é propriedade intelectual da **Equipe 2** de desenvolvimento do Projeto DFS-2026.1 da **Escola Atlântico Avanti**.
**Todos os direitos reservados.** É proibida a cópia, redistribuição ou uso comercial sem autorização expressa dos autores.