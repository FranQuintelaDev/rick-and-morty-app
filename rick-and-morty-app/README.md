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

### Otros comandos útiles

```bash
npm run build      # Build de producción
npm run test       # Ejecutar tests
npm run lint       # Linter
```

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
├── components/       # Componentes reutilizables
│   ├── Header/       # Header con navegación
│   ├── CharacterCard/
│   ├── CharacterGrid/
│   ├── SearchFilters/ # Filtros con Zustand
│   └── ui/           # Loading, Error, EmptyState
├── pages/            # Páginas principales
├── hooks/            # Custom hooks (useCharacters, useCharacter)
├── store/            # Zustand stores
├── services/         # API calls
└── types/            # TypeScript types
```

### Decisiones clave

- **Componentes desacoplados**: Separé Loading, Error y EmptyState en componentes UI reutilizables para no repetir código en cada página.

- **Zustand para filtros**: En vez de prop drilling o Context, usé Zustand. El store de filtros separa `filters` (lo que el usuario escribe) de `appliedFilters` (lo que se busca), así la búsqueda solo se dispara cuando el usuario hace clic en "Search".

- **Grid responsive**: Cambié la lista virtualizada por un CSS Grid que aprovecha mejor el espacio horizontal (1-4 columnas según el viewport).

- **React Query**: Maneja el fetching, caché y estados de loading/error automáticamente. Los datos se cachean por queryKey, así que si vuelves a un personaje que ya visitaste, carga instantáneo.

- **Favoritos persistidos**: El store de favoritos usa `persist` de Zustand para guardar en localStorage.

---

## Mejoras pendientes

Con más tiempo añadiría:

- **Paginación infinita** o botón "cargar más" (la API tiene paginación)
- **Tests E2E** con Playwright
- **Skeleton loaders** en vez de spinner
- **Filtro por favoritos** para ver solo los guardados
- **PWA** para funcionar offline
