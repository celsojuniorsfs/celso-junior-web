## TL;DR
<!-- 1-3 frases: o que mudou + por quê + como testar rapidamente -->

## O que mudou?
<!-- Lista objetiva: Added / Changed / Fixed / Removed -->

## Por quê?
<!-- Motivação, contexto ou link da issue/discussão -->
Ref: CEL-

## Como testar
<!-- Passo a passo para o revisor -->
1.
2.
3.

- [ ] `ng build` passa
- [ ] `ng test` passa (Vitest)
- [ ] Testado manualmente no navegador
- [ ] Navegado só com teclado (Tab/Shift+Tab), foco visível em tudo
- [ ] Sem violações no AXE / WCAG AA (contraste, ARIA)

## Tipo de mudança
- [ ] `feat`: Nova funcionalidade
- [ ] `fix`: Correção de bug
- [ ] `docs`: Documentação
- [ ] `refactor`: Refatoração (sem mudança de comportamento)
- [ ] `chore`: Build, dependências, CI, etc.
- [ ] `perf`: Performance
- [ ] Outro:

## Breaking changes?
- [ ] Não
- [ ] Sim → descreva o impacto e como migrar:

## Screenshots / GIFs
<!-- Antes / Depois. Obrigatório para mudança visual/UI -->

## Checklist
- [ ] Fiz self-review do código
- [ ] Segui os padrões do `CLAUDE.md` (standalone, signals, `input()`/`output()`, `computed()`, controle de fluxo nativo, `inject()`)
- [ ] Testes de renderização (Vitest) adicionados/atualizados, se aplicável
- [ ] Sem `console.log` / código de debug
- [ ] Nenhum dado, código ou screenshot de sistema de cliente (VM Agro, MadeLife, Flash Cover, Visionnaire) commitado
- [ ] Commits seguem Conventional Commits (`feat:`, `fix:`, `chore:`...)
