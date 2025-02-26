---
title: 'Teste Técnico: Pensamentos, Abordagem e Implementação'
date: '2025-02-25'
---

# Teste Técnico: Pensamentos, Abordagem e Implementação

## A Tarefa e Meus Pensamentos

Recentemente, participei de uma entrevista em uma empresa e me enviaram um pequeno teste técnico. Eu tinha um dia livre e decidi abordá-lo com seriedade — como se fosse uma tarefa real de trabalho.

### Sobre a Tarefa

A tarefa envolvia trabalhar com um aplicativo de gerenciamento de tarefas (Task Manager) construído com React, TypeScript e Tailwind CSS. Os principais requisitos incluíam:

- Correção de bugs:

  - O filtro de tarefas não estava funcionando corretamente.
  - A exclusão de uma tarefa não atualizava imediatamente a interface.
  - Havia problemas de consistência de estilos e erros no TypeScript.

- Melhorias no código: Refatoração para melhorar a legibilidade e a manutenção.

- Melhorias adicionais: Adicionar a capacidade de salvar tarefas no armazenamento local, melhorar a UI/UX, configurar CI/CD e escrever testes.

Uma descrição detalhada da tarefa pode ser encontrada [neste repositório](https://github.com/svetlitskiy/react-take-home-exercise).

O projeto em si é muito simples: um formulário para adicionar tarefas, uma tabela com uma lista e filtragem, e um botão de exclusão. Em tarefas como essa, o foco está mais no estilo de trabalho, na formatação de PRs, nos commits e na organização do código do que na complexidade da implementação.

No trabalho real, o código é revisado por outros membros da equipe, por isso é importante formatá-lo de forma a minimizar o tempo de revisão. Também é importante manter um histórico de alterações com links para as tarefas, para que sempre fique claro por que e por quem uma determinada alteração foi feita.

## Plano de Solução

Decidi abordar a tarefa em várias etapas, dividindo as alterações em blocos lógicos. Cada etapa foi formatada em um PR separado para facilitar a revisão.

Para manter a ordem e boas práticas, criei [uma issue para cada etapa no GitHub Issues](https://github.com/svetlitskiy/react-take-home-exercise/issues).

### 1. Organizando o Projeto

Primeiro, adicionei linters, configurei o TypeScript e o ESLint. Essas são etapas básicas que imediatamente colocam o código em ordem, previnem erros e simplificam o trabalho posterior.

PR: [Configuração de Linters e TypeScript](https://github.com/svetlitskiy/react-take-home-exercise/pull/1)

### 2. Configurando Deploy e CI/CD

O próximo passo foi configurar verificações automáticas de build para cada PR e deploy no GitHub Pages a partir da branch main. Isso é útil tanto para testar as alterações quanto para visualizar os resultados de forma conveniente.

PR: [Configuração de CI/CD e Deploy](https://github.com/svetlitskiy/react-take-home-exercise/pull/4)

### 3. Corrigindo Bugs

Os bugs atribuídos não eram complexos. A julgar pelo código e pelos comentários, eles foram deixados intencionalmente (o que faz sentido para um teste técnico). O filtro tinha estilos misturados e as funções estavam funcionando de forma um pouco incorreta.

Corrigi:

- O comportamento incorreto do filtro.
- A atualização da UI após a exclusão de uma tarefa (anteriormente, acontecia com um atraso).
- Inconsistências de estilos no Tailwind CSS.
- Erros no TypeScript e tipos ausentes.

Não vou entrar em muitos detalhes aqui, pois acho que as alterações no código são mais claras do que uma descrição verbal.

PR: [Correção de Bugs](https://github.com/svetlitskiy/react-take-home-exercise/pull/7)

### 4. Adicionando Armazenamento Persistente de Tarefas

Decidi usar o IndexedDB em vez do LocalStorage, pois é uma solução mais adequada:

- O IndexedDB é assíncrono e não bloqueia a thread principal.
- Não há limitações de tamanho de armazenamento.
- É mais adequado para lidar com grandes volumes de dados.

Na minha opinião, o IndexedDB é subutilizado no desenvolvimento frontend. Em 2025, ainda armazenamos dados no store e os carregamos da API a cada requisição, mesmo que os navegadores tenham armazenamento interno que pode ser usado de forma eficaz.

PR: [Adicionando IndexedDB](https://github.com/svetlitskiy/react-take-home-exercise/pull/9)

### 5. Escrevendo Testes

Normalmente, prefiro testes de integração e e2e em vez de testes unitários para cada componente. Testar componentes separadamente muitas vezes se resume a verificar nomes de classes e cliques em botões, o que tem pouco a ver com a lógica de negócios real. Esses testes criam uma sobrecarga de manutenção sem fornecer muito valor.

É muito mais importante cobrir serviços e lógica complexa com testes. Neste caso, escrevi:

- Testes unitários para componentes (para mostrar que sei escrevê-los — afinal, é um teste técnico).
- Um teste de integração para o serviço que trabalha com o IndexedDB. Tive que adicionar bibliotecas para emular a API do IndexedDB nos testes.

PR: [Adicionando Testes](https://github.com/svetlitskiy/react-take-home-exercise/pull/11)

## Conclusão

No final, abordei a tarefa como se estivesse trabalhando em um projeto real: estruturei as alterações, formatei uma cadeia de PRs para facilitar a revisão, corrigi bugs, adicionei IndexedDB e escrevi testes. Essa abordagem não apenas ajuda a entender o código mais rapidamente, mas também torna o processo de desenvolvimento mais transparente.

Se você estiver interessado, pode conferir o repositório com os PRs abertos.
