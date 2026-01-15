# Rick and Morty App

Una app para ver personajes de Rick and Morty usando la API pública.

## Cómo ejecutar el proyecto

### Requisitos
- Node.js (v18+)
- npm

### Instalación

```bash
# Instalar dependencias
npm install

# Arrancar en modo desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`


---

## Arquitectura y decisiones técnicas

### Stack
- **React 19** + **TypeScript** + **Vite** - Setup moderno y rápido
- **React Query** - Para data fetching con caché automática
- **Zustand** - Estado global simple (favoritos y filtros)
- **React Router** - Navegación SPA

### Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CharacterCard/   # Tarjeta de personaje
│   ├── CharacterGrid/   # Grid responsive de tarjetas
│   ├── FavoriteButton/  # Botón de favoritos
│   ├── Header/          # Header con navegación y theme toggle
│   ├── SearchFilters/   # Filtros de búsqueda (con Zustand)
│   ├── ThemeToggle/     # Switch dark/light mode
│   └── ui/              # Componentes UI genéricos
│       ├── Loading/
│       ├── ErrorMessage/
│       └── EmptyState/
├── context/             # React Context (Theme)
├── hooks/               # Custom hooks (useCharacters, useCharacter)
├── pages/               # Páginas de la app
│   ├── CharacterList/
│   └── CharacterDetail/
├── services/            # Llamadas a la API
├── store/               # Zustand stores (favoritos, filtros)
├── styles/              # Estilos globales
└── types/               # TypeScript types
```

### Decisiones clave

- **Componentes desacoplados**: Separé Loading, Error y EmptyState en componentes UI reutilizables para no repetir código en cada página.

- **Zustand para filtros**: En vez de prop drilling o Context, usé Zustand. El store de filtros separa `filters` (lo que el usuario escribe) de `appliedFilters` (lo que se busca), así la búsqueda solo se dispara cuando el usuario hace clic en "Search".

- **React Query**: Maneja el fetching, caché y estados de loading/error automáticamente. Los datos se cachean por queryKey, así que si vuelves a un personaje que ya visitaste, carga instantáneo.

- **Favoritos persistidos**: El store de favoritos usa `persist` de Zustand para guardar en localStorage.

---

## Mejoras pendientes

Con más tiempo añadiría:

- **Paginación infinita** o botón "cargar más" (la API tiene paginación)
- **Skeleton loaders** en vez de spinner
- **Filtro por favoritos** para ver solo los guardados
