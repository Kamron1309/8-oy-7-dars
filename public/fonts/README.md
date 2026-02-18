# Fonts

Bu papkaga custom fontlarni joylashtiring.

## Ishlatish

`BitcountGridSingle.ttf` faylini bu papkaga qo'ying.

Font avtomatik ravishda `app/globals.css` da yuklanadi:

```css
@font-face {
  font-family: "Bitcount Grid Single";
  src: url("/fonts/BitcountGridSingle.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
```

## Komponentda ishlatish

```tsx
<div style={{ fontFamily: '"Bitcount Grid Single", sans-serif' }}>
  Text
</div>
```

yoki Tailwind CSS bilan:

```tsx
<div className="font-[Bitcount_Grid_Single]">
  Text
</div>
```
