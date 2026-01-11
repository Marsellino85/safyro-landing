# SAFYRO Landing - Cookbook

Praktické poznámky, tipy a řešení běžných problémů při vývoji projektu.

## Formátování kódu

### Problém: Prettier neformátuje HTML v template strings

**Problém:**

- Klávesová zkratka `Shift+Alt+F` nefunguje pro formátování HTML uvnitř template stringů v TypeScript souborech
- Prettier neformátuje HTML kód uvnitř backtick stringů (`` `...` ``)

**Řešení:**

1. **Prettier extension je nainstalovaný** - `esbenp.prettier-vscode`
2. **Prettier konfigurace** - soubor `.prettierrc` obsahuje základní nastavení
3. **VS Code nastavení** - `.vscode/settings.json` obsahuje default formatter a formátování při uložení

**Důležité:**

- Prettier **NEUMÍ** formátovat HTML uvnitř template strings - HTML je považováno za běžný text
- Pro HTML v template strings je potřeba **ručně kontrolovat odsazení**
- Alternativy:
  - Extrahovat HTML do samostatného `.html` souboru
  - Použít JSX/TSX místo template strings
  - Použít vestavěné nástroje Cursoru pro výběr a odsazení (Tab/Shift+Tab)

**Klávesové zkratky:**

- `Shift+Alt+F` - Format Document (nefunguje pro HTML v template strings)
- `Ctrl+K Ctrl+S` - Keyboard Shortcuts (kontrola zkratek)
- `Tab` / `Shift+Tab` - Ruční odsazení/zpět

**Konfigurace formátování:**

- Default formatter: `esbenp.prettier-vscode`
- Format on save: `true`
- Podporované typy souborů: TypeScript, JavaScript, TSX, JSX, JSON, CSS, HTML, Markdown

**Commit message:**

```
Fix HTML formatting in email template

- Fixed indentation in header section with logo
- Added VS Code settings for comprehensive file type formatting
- Created extensions.json with recommended Prettier extension
- Updated cookbook with Prettier formatting limitations documentation
```
