---
title: 'Guía de Estilo Markdown'
description: 'Aquí tienes un ejemplo de sintaxis básica de Markdown que puedes usar al escribir contenido Markdown en Astro.'
pubDate: 'Jun 19 2024' # O 'Jun 19 2024' si prefieres mantener el formato original
heroImage: '../../../assets/img1.png'
lang: es
---

Aquí tienes un ejemplo de sintaxis básica de Markdown que se puede usar al escribir contenido Markdown en Astro.

## Headings

Los siguientes elementos HTML `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto mientras que `<h6>` es el más bajo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
````

### Output

## Bloque de Cita

El elemento blockquote representa contenido que se cita de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

### Bloque de cita sin atribución

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Nota:** Puedes usar *sintaxis de Markdown* dentro de una cita en bloque.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Nota:** Puedes usar *sintaxis de Markdown* dentro de una cita en bloque.

### Bloque de cita con atribución

#### Syntax

```markdown
> No te comuniques compartiendo memoria, comparte memoria comunicándote.\<br\>
> — \<cite\>Rob Pike[^1]\</cite\>
```

#### Output

> No te comuniques compartiendo memoria, comparte memoria comunicándote.\<br\>
> — \<cite\>Rob Pike[^1]\</cite\>


[^1]: La cita anterior está extraída de la [charla](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante Gopherfest, 18 de noviembre de 2015.


## Tablas

### Syntax

```markdown
| Italics   | Bold      | Code    |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### Output

| Italics   | Bold      | Code    |
| --------- | -------- | ------ |
| *italics* | **bold** | `code` |

## Bloques de Código

### Syntax

Podemos usar 3 comillas invertidas ``` en una nueva línea y escribir el fragmento y cerrar con 3 comillas invertidas en una nueva línea y para resaltar la sintaxis específica del idioma, escriba una palabra del nombre del idioma después de las primeras 3 comillas invertidas, por ejemplo. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Lista Ordenada

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1.  First item
2.  Second item
3.  Third item

### Lista desordenada

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

  - List item
  - Another item
  - And another item

### Lista anidada

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

  - Fruit
      - Apple
      - Orange
      - Banana
  - Dairy
      - Milk
      - Cheese

### Latex

Puedes usar LaTeX para expresiones matemáticas en Markdown. Para matemáticas en línea, usa signos de dólar simples `$...$`, y para matemáticas de visualización, usa signos de dólar dobles `$$...$$`.

#### Syntax

```markdown
Ecuación en la linea: $E = mc^2$
Ecuación:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```


#### Output

Ecuación en la línea: $E = mc^2$
Ecuación:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

## Línea horizontal
### Syntax

```markdown
---
```
### Output
---