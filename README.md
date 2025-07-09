# Hive CheckBlock

Bienvenido a **Hive CheckBlock**, una aplicación Next.js moderna y didáctica para consultar información y el historial de operaciones de cuentas en la blockchain de Hive.

## 🚀 Características principales
- Consulta visual y detallada del historial de operaciones de cualquier cuenta Hive.
- Consulta de información básica de cuentas Hive.
- UI atractiva, responsiva y amigable para nuevos usuarios y desarrolladores.
- Arquitectura limpia y escalable, fácil de extender.

## 📂 Estructura del proyecto
```
next-checkblock/
├── src/
│   ├── app/
│   │   ├── components/         # Componentes de UI reutilizables
│   │   ├── api/                # Endpoints API (Next.js Route Handlers)
│   │   ├── page.tsx            # Página principal (Home)
│   │   └── ...
│   ├── services/               # Lógica de acceso a Hive
│   ├── types/                  # Tipos TypeScript (opcional)
│   └── utils/                  # Utilidades compartidas
├── public/                     # Imágenes y recursos estáticos
├── package.json
└── README.md
```

## 🛠️ Instalación y ejecución
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/next-checkblock.git
   cd next-checkblock
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   ```
4. **Abre la app en tu navegador:**
   [http://localhost:3000](http://localhost:3000)

## 🧑‍💻 ¿Cómo funciona?
- Ingresa el nombre de usuario Hive en el formulario.
- Selecciona el servicio que deseas (historial o datos de cuenta).
- Visualiza los resultados de forma clara y didáctica.

## ✨ Personalización
- Cambia la imagen de fondo editando la clase `bg-[url('/globe.svg')]` en `src/app/page.tsx`.
- Agrega nuevos servicios creando componentes y endpoints siguiendo la arquitectura actual.

## 🤝 Contribuir
1. Haz un fork del repositorio.
2. Crea una rama para tu feature/fix: `git checkout -b mi-feature`.
3. Realiza tus cambios y haz commit: `git commit -am 'Agrega mi feature'`.
4. Haz push a tu fork: `git push origin mi-feature`.
5. Abre un Pull Request.

## 📝 Licencia
MIT

---

¿Dudas o sugerencias? ¡Abre un issue o contacta a los mantenedores!
