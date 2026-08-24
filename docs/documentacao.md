# Documentação Completa - Portfólio Kátia Reis

Esta documentação consolida o planejamento, os requisitos e a estratégia de implementação do projeto **Portfolio Kátia Reis**, conforme as diretrizes de desenvolvimento orientado por requisitos e o uso de Inteligência Artificial como apoio (Vibe Coding).

---

### 1. Definição do Projeto
*   **Nome do Projeto:** Portfolio Kátia Reis.
*   **Problema ou Necessidade Atendida:** Recrutadores enfrentam dificuldades para encontrar informações centralizadas e atualizadas, lidando com dados dispersos que podem resultar na perda de oportunidades por falta de visibilidade das competências técnicas.
*   **Objetivo Principal:** Permitir que recrutadores encontrem informações profissionais de forma rápida e centralizada, reduzindo o tempo de busca e facilitando a avaliação de perfil.
*   **Público-alvo:** **Recrutadores técnicos**, clientes em potencial para projetos freelancer e colegas de área.
*   **Proposta Visual:** Website de página única (*one-page*) **responsivo** com organização visual consistente e foco em carregamento rápido.
*   **Conteúdo Apresentado:** Identificação pessoal, biografia curta, formação acadêmica, competências técnicas, vitrine de projetos, experiências profissionais, hobbies e contatos.
*   **Principais Funcionalidades:** Navegação semântica, vitrine de projetos com filtros, formulário de contato validado, integração com WhatsApp e botão para download de currículo em PDF.
*   **Tecnologias Utilizadas:** **HTML5**, **CSS3**, **JavaScript** e **Bootstrap 5**.

---

### 2. Prompts Utilizados
Nesta fase de **Vibe Coding**, a IA atuou como parceira na arquitetura e refinamento do projeto.

*   **Prompt 01: Entrevista Crítica para Definição do Problema**
    *   **Objetivo:** Esclarecer o problema e o valor real do portfólio.
    *   **Texto Enviado:** *"Atue como analista de produto. Faça uma pergunta por vez para me ajudar a esclarecer o problema do meu projeto..."*.
    *   **Decisão:** Restringir o público-alvo a recrutadores e clientes freelancer, focando em uma navegação de até 2 minutos.
*   **Prompt 02: Refinamento de Backlog e Critérios de Aceite**
    *   **Objetivo:** Transformar necessidades em tarefas técnicas priorizadas.
    *   **Texto Enviado:** *"Atue como revisor crítico de escopo. Analise meu objetivo... gere histórias de usuário e critérios de aceite objetivos"*.
    *   **Decisão:** Aplicação da técnica **MoSCoW**, postergando o painel administrativo para proteger o fluxo central do MVP.
*   **Prompt 03: Estrutura Inicial e Layout Responsivo**
    *   **Objetivo:** Gerar a base estrutural seguindo as restrições técnicas.
    *   **Texto Enviado:** *"Atue como desenvolvedor front-end sênior. Crie a estrutura HTML5 semântica inicial... Use exclusivamente Bootstrap 5..."*.
    *   **Decisão:** Correção manual do código da IA para garantir o uso de **HTML semântico** em vez de tags genéricas.

---

### 3. Histórias de Usuário
As necessidades foram descritas no formato: *Como [papel], quero [ação], para [benefício]*.

*   **US01:** Como **recrutador**, quero ver uma introdução clara e foto profissional para saber rapidamente quem é a profissional.
*   **US02:** Como **cliente**, quero ver projetos organizados por categoria para avaliar a experiência do autor.
*   **US03:** Como **visitante**, quero navegar em dispositivos móveis com velocidade para consumir o conteúdo de forma fluida.
*   **US04:** Como **recrutador técnico**, quero ler a descrição do problema e o processo de criação de cada projeto.
*   **US06:** Como **profissional da área**, quero ver os links para o código-fonte (GitHub) ou produto ao vivo.
*   **US07:** Como **interessado em contratação**, quero encontrar botões de CTA visíveis (WhatsApp) para iniciar contato rápido.
*   **US09:** Como **interessado no perfil**, quero baixar o currículo em PDF para análise offline.

---

### 4. Critérios de Aceitação
Condições verificáveis para garantir a conclusão das funcionalidades.

*   **Apresentação:** O texto deve carregar em menos de 2 segundos; foto com tag `alt` obrigatória; bio com no máximo 150 palavras.
*   **Vitrine:** Filtragem de projetos via JavaScript sem recarregar a página; cards devem exibir título, imagem, resumo e tecnologias.
*   **Responsividade:** O layout deve ajustar-se a diferentes telas sem barra de rolagem horizontal.
*   **Links:** Todos os links externos devem abrir em nova aba (`target="_blank"`); botões vazios não devem ser exibidos.
*   **Formulário:** Botão de envio `disabled` até que campos obrigatórios sejam preenchidos; validação de formato de e-mail.
*   **Download:** Clique deve disparar download automático de PDF com menos de 2 MB.

---

### 5. Priorização MoSCoW
Classificação das histórias para garantir o foco na entrega central.

*   **Must Have:** US01 (Apresentação), US02 (Vitrine), US03 (Responsividade), US07 (WhatsApp) e US09 (Download de CV).
*   **Should Have:** US06 (Links GitHub/Live) e US08 (Formulário de Contato).
*   **Could Have:** US04 (Cases Detalhados) e US05 (Galeria Lightbox).
*   **Won't Have Now:** US10 (Notificações Imediatas) e Painel Administrativo.

---

### 6. Descrição do MVP
O **Produto Mínimo Viável** centraliza a solução para o problema da dispersão de informações.

*   **Necessidades:** Identificação clara, evidências de competências e meios de contato rápido.
*   **Interações Reais:** Filtragem dinâmica de projetos, navegação responsiva e gatilho de download de arquivo via JS.
*   **Fora do Escopo:** Painel administrativo (atualização via código) e notificações automáticas de formulário.
*   **Condição de Conclusão:** Carregamento rápido (< 2s), acessibilidade (tags `alt`), responsividade total e **zero simulação** de botões.

---

### 7. Backlog Acionável
Lista de tarefas específicas vinculadas às histórias de usuário e prioridades.

| ID | Item do Backlog | História | Prioridade | Status |
| :--- | :--- | :--- | :--- | :--- |
| **BL01** | Criar cabeçalho com introdução e foto | US01 | **Must Have** | Não iniciado |
| **BL02** | Implementar vitrine de projetos com filtros | US02 | **Must Have** | Não iniciado |
| **BL03** | Desenvolver menu de navegação responsivo | US03 | **Must Have** | Não iniciado |
| **BL04** | Configurar botão de download de currículo | US09 | **Must Have** | Não iniciado |
| **BL05** | Implementar botão de contato via WhatsApp | US07 | **Must Have** | Não iniciado |
| **BL06** | Adicionar links técnicos (GitHub/Live) | US06 | Should Have | Não iniciado |
| **BL07** | Desenvolver formulário de contato validado | US08 | Should Have | Não iniciado |

