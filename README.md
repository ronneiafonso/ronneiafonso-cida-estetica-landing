<img width="854" height="411" alt="desktop" src="https://github.com/user-attachments/assets/696310c3-fc2f-4f96-9df6-9b2d5d6e8516" /># Cida Estética — Landing Page

> *Elegância que transforma. Beleza que empodera.*

---

## Índice

- [Visão Geral](#-visão-geral)
- [Demonstração](#-demonstração)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Decisões de Desenvolvimento](#-decisões-de-desenvolvimento)
- [Diferenciais do Projeto](#-diferenciais-do-projeto)
- [Aprendizados](#-aprendizados)
- [Melhorias Futuras](#-melhorias-futuras)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Autor](#-autor)

---

## Visão Geral

A **Cida Estética** é uma landing page desenvolvida para uma profissional autônoma de estética localizada em Vitória - ES. O objetivo central da página é converter visitantes em clientes, apresentando os serviços oferecidos, facilitando o contato via WhatsApp e transmitindo profissionalismo e confiança desde o primeiro acesso.

### Problema que resolve

Muitos profissionais autônomos da área da beleza dependem exclusivamente de redes sociais para divulgar seu trabalho — o que limita a credibilidade e a conversão. Esta landing page oferece uma presença digital própria, com identidade visual consistente, informações centralizadas e um caminho claro para o agendamento.

### Público-alvo

Mulheres adultas que buscam serviços de estética de qualidade na Grande Vitória, com acesso predominantemente via smartphone.

---

## Demonstração

🔗 **Acesse o site em produção:** [https://cida-estetica.netlify.app](https://cida-estetica.netlify.app)


| Desktop | Mobile |
|---|---|
| *<img width="854" height="411" alt="desktop" src="https://github.com/user-attachments/assets/a813d922-6121-4310-bea2-9e06f5b2872b" />* | *<img width="235" height="359" alt="mobile1" src="https://github.com/user-attachments/assets/b427e604-ba5f-4bd9-b53d-9f992c3fef69" />* |

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Papel no Projeto |
|---|---|---|
| **React** | 19 | Biblioteca principal para construção da interface por componentes |
| **TypeScript** | 6 | Tipagem estática que previne erros e melhora a manutenibilidade |
| **Vite** | 8 | Bundler moderno com HMR ultrarrápido e build otimizado para produção |
| **Framer Motion** | 12 | Animações fluidas de entrada e interação (fade, slide, scale) |
| **Lucide React** | 0.47 | Biblioteca de ícones SVG leve e consistente com o design |
| **CSS Vanilla** | — | Estilização completa sem dependências externas, com CSS Variables e Media Queries |
| **Google Fonts** | — | Tipografia refinada com *Playfair Display* (títulos) e *Inter* (textos) |
| **Netlify** | — | Hospedagem com deploy contínuo, HTTPS automático e headers de segurança |

---

## Funcionalidades

- **Navbar com menu hambúrguer** — navegação adaptada ao mobile com drawer animado
- **Hero Section** — apresentação impactante com animações de entrada e badge de prova social
- **Seção de Serviços** — cards com hover animado exibindo os principais tratamentos
- **Seção "Tratamentos Exclusivos"** — destaque visual com imagem e lista de diferenciais
- **Seção de Contato** — informações centralizadas (telefone, e-mail, endereço e Instagram)
- **CTA WhatsApp** — botão de chamada à ação direto para conversa no WhatsApp
- **Design responsivo** — experiência otimizada para smartphones, tablets e desktops
- **Scroll suave** — navegação fluida entre as seções via âncoras

---

## Decisões de Desenvolvimento

### Componentes independentes e coesos
O projeto foi dividido em componentes React com responsabilidade única (`Navbar`, `Hero`, `Services`, `Contact`, `Footer`), facilitando manutenção, leitura e reuso futuro.

### CSS Vanilla com Custom Properties
Em vez de adotar frameworks como Tailwind ou Bootstrap, optou-se por CSS puro com variáveis CSS (`--primary`, `--secondary`, `--text-muted`, etc.). Isso elimina dependências desnecessárias, reduz o tamanho do bundle e oferece controle total sobre o design.

### Responsividade por Media Queries escaladas
Foram implementados três breakpoints (`1200px`, `768px` e `480px`) com ajustes progressivos de layout, tipografia e espaçamentos — garantindo que nenhum elemento quebre ou transborde em telas pequenas.

### Animações com Framer Motion
As animações foram aplicadas apenas onde agregam valor percebido pelo usuário (entrada do hero, hover nos cards), evitando excesso que comprometeria a performance.

### Headers de segurança via Netlify
O arquivo `netlify.toml` configura cabeçalhos HTTP como `Content-Security-Policy`, `X-Frame-Options`, `Strict-Transport-Security` e `Permissions-Policy` — práticas essenciais para sites em produção.

---

## Diferenciais do Projeto

- **Mobile-first real** — o layout foi testado e corrigido para funcionar corretamente em smartphones, não apenas reduzido
- **Design premium** — paleta de cores cuidadosamente escolhida, tipografia refinada e glassmorphism aplicado com moderação
- **Performance** — bundle otimizado com Vite, imagens com `object-fit`, sem bibliotecas CSS externas pesadas
- **Segurança** — headers HTTP configurados para proteção contra XSS, clickjacking e MIME sniffing
- **SEO básico** — `<title>` descritivo, `<meta description>`, HTML semântico e estrutura de headings correta
- **Deploy automatizado** — publicação com um comando via Netlify CLI, com CDN global

---

## Aprendizados

- Compreensão prática do ciclo completo de desenvolvimento: da criação local ao deploy em produção
- Implementação de responsividade real, indo além de apenas escalar elementos — reorganizando o layout com CSS Grid e `flexWrap`
- Uso de **Framer Motion** para animações declarativas e performáticas em React
- Configuração de **headers de segurança HTTP** em ambiente de produção via `netlify.toml`
- Fluxo completo de versionamento com **Git** e publicação no **GitHub**
- Boas práticas de **componentização** em React com TypeScript

### Desafios enfrentados

| Desafio | Solução |
|---|---|
| Navbar não adaptava ao mobile | Criado menu hambúrguer com drawer animado e controle de estado React |
| Grid de 2 colunas quebrando em telas pequenas | Aplicado `grid-template-columns: 1fr` via media query em cada seção |
| Fontes com tamanho fixo em mobile | Reduzidos progressivamente em breakpoints `768px` e `480px` |

---

## Autor

**Ronnei Afonso Leite de Oliveira**

Profissional em transição para a área de tecnologia, com foco em desenvolvimento e automação de processos. Possui experiência sólida com Google Planilhas, Apps Script e análise de dados, além de atuação como educador — o que potencializa a capacidade de comunicação, organização e resolução de problemas.

[![GitHub](https://img.shields.io/badge/GitHub-ronneiafonso-181717?style=for-the-badge&logo=github)](https://github.com/ronneiafonso)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ronnei%20Afonso-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ronneiafonso)

---

<p align="center">
  Desenvolvido por <strong>Ronnei Afonso</strong>
</p>
