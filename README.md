# BetterCanoas — Guia de Descarte e Coleta Seletiva em Canoas

Este site ajuda os moradores de Canoas a entenderem onde e como descartar cada tipo de lixo, além de mostrar os horários e dias da coleta no seu bairro. O objetivo é tirar dúvidas rápidas e evitar que entulhos e materiais recicláveis sejam jogados nas calçadas de forma incorreta.

---

## 🤔 O que o site faz e como ele te ajuda?

*   **Evita multas:** Mostra as regras de limpeza urbana de Canoas para que você não descarte materiais no lugar errado por engano.
*   **Facilita sua rotina:** Você consegue conferir os dias e turnos (diurno ou noturno) do caminhão do lixo no seu bairro.
*   **Tira dúvidas sobre lixo especial:** Explica o que fazer com lâmpadas, pilhas, eletrônicos e até mesmo o serviço correto de recolhimento para animais mortos, que não devem ir para o lixo comum.
*   **Mantém a cidade limpa:** Ao saber onde entregar móveis velhos e restos de obras, evitamos o acúmulo de sujeira nas ruas e a proliferação de insetos.

---

## 🛠️ O que você vai encontrar no site (Funcionalidades)

### 🔍 Filtro "Encontre um Local"
Logo na página inicial, você pode escolher o seu **Bairro** e o **Tipo de Resíduo** que quer jogar fora. O sistema indica na hora o ponto correto mais próximo.

### 📚 Guia Prático de Descarte
Uma lista separada pelas cores da coleta seletiva (Papel, Plástico, Vidro, Metal, Orgânico e Rejeitos) ensinando como preparar o material, como dar um enxágue rápido ou embalar vidros quebrados com segurança.

### 📍 Localizador de Ecopontos
Informações completas (endereço e horários de funcionamento) dos 5 Ecopontos da cidade:
*   **Ecoponto Nazário** (Bairro Guajuviras)
*   **Ecoponto Esperança** (Bairro Igara)
*   **Ecoponto Espumoso** (Bairro Mathias Velho)
*   **Ecoponto Rio Branco** (Bairro Rio Branco)
*   **Ecoponto Niterói** (Bairro Niterói)

*Nota: O site também avisa o limite de volume aceito (até 2m³) e o que os funcionários não podem receber lá.*

## 🎨 Design e Interface (UX/UI)

O visual do **BetterCanoas** foi planejado no Canva com foco em acessibilidade e clareza visual:
* **Paleta ecológica:** Cores baseadas em tons de verde e cinza para remeter à sustentabilidade e limpeza urbana.
* **Componentes da Interface:**
  * **Filtros Simplificados:** Uso de seletores (*dropdowns*) fáceis de usar no celular ou computador.
  * **Menu Lateral (Sidebar):** Navegação rápida por ícones para transição entre a Home e os Guias completos.
  * **Cards Interativos:** Exibição dos Ecopontos com fotos reais e botões diretos de ação ("Saiba Mais").
  * **Mapa Integrado:** Visualização geográfica das rotas e locais de descarte direto na tela de busca.

---

## 🚀 Como rodar este projeto no seu computador

Se você baixou o projeto do GitHub e quer ver o site funcionando no seu navegador, siga estes passos no terminal:

1. **Instale os componentes necessários:**
   ```bash
   npm install
   ```
2. **Caso falte o plugin de estilos (Tailwind/PostCSS), instale-o com:**
   ```bash
   npm install -D @tailwindcss/postcss tailwindcss postcss
   ```
3. **Inicie o projeto:**
   ```bash
   npm run dev
   ```
4. **Abra no navegador:**
   Segure a tecla `Ctrl` e clique no link azul que aparecer no terminal (ex: `http://localhost:5173/`).

---
