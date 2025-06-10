# Calculator v2

**Plně funkční kalkulačka s historií výpočtů a možností opětovného použití.**

Tento projekt představuje webovou kalkulačku vylepšenou o klíčové funkce:
* Základní aritmetické operace.
* Zobrazení historie provedených výpočtů.
* Možnost vyvolat a znovu použít jakýkoli výsledek z historie pro další výpočty.

---

## Funkce

* **Základní operace:** Sčítání, odčítání, násobení, dělení.
* **Historie výpočtů:** Každý dokončený výpočet je uložen a zobrazen v přehledném seznamu.
* **Opětovné použití z historie:** Jednoduchým kliknutím na položku v historii můžete její výsledek vložit zpět do kalkulačky a pokračovat v práci.
* **Responzivní design:** Optimalizováno pro zobrazení na různých zařízeních.
* **Moderní webové technologie:** Postaveno s použitím HTML, SASS, JavaScriptu, Math.js

---

## Jak spustit projekt lokálně

Pro spuštění a otestování kalkulačky na svém lokálním počítači postupujte takto:

1.  **Naklonujte repozitář:**
    ```bash
    git clone [https://github.com/gbboss2/Calculator-v2.git](https://github.com/gbboss2/Calculator-v2.git)
    ```
2.  **Přejděte do adresáře projektu:**
    ```bash
    cd Calculator-v2
    ```
3.  **Nainstalujte závislosti Node.js:**
    ```bash
    npm install
    ```
    *(Tento krok obvykle nainstaluje všechny balíčky definované v `package.json`, včetně `math.js` a `sass`.)*

4.  **Instalace SASS (pokud používáte `styles.scss`):**
    Pokud nemáte SASS nainstalovaný globálně, ujistěte se, že je nainstalován lokálně (což by se mělo stát s `npm install`, pokud je v `devDependencies` v `package.json`):
    * **Kompilace SCSS do CSS:**
        Jakmile máte SASS, můžete kompilovat své `.scss` soubory do `.css` souborů. Zde je příklad, jak sledovat změny a automaticky kompilovat:
        ```bash
        npx sass --watch styles.scss:styles.css
        ```
        (Tento příkaz sleduje `styles.scss` a automaticky generuje `styles.css` při každé změně. Pokud máte složku pro SCSS soubory, např. `scss/`, a výstupní pro CSS, např. `css/`, použili byste: `npx sass --watch scss/:css/`)

5.  **Otevřete `index.html`:**
    Jednoduše otevřete soubor `index.html` ve svém webovém prohlížeči. Případně můžete použít rozšíření VS Code jako "Live Server" pro snadné spouštění, které automaticky aktualizuje stránku při změnách souborů.

---

## Budoucí vylepšení

* Přidání pokročilejších matematických funkcí (sin, cos, tan, log, atd.).
* Implementace klávesových zkratek pro rychlé zadávání.
