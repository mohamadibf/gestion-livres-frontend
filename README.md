# Application de Gestion de Bibliothèque - Frontend

## 📚 Aperçu
Application React moderne pour gérer une collection de livres avec fonctionnalités CRUD complètes et upload d'images.

1. **Fonctionnalités**
    - 📖 Affichage paginé des livres
    - ➕ Ajout de nouveaux livres avec formulaire
    - ✏️ Modification des existants
    - 🗑️ Suppression avec confirmation
    - 🖼️ Upload d'images de couverture (2MB max)
    - 📱 Interface responsive (mobile/desktop)

2. **Stack Technique**
    - ⚛️ React 19 + Vite
    - 🎨 Tailwind CSS 3
    - 🔄 React Router DOM
    - 📡 Axios pour les requêtes API
    - ✨ Heroicons v2

3. **Installation & Configuration**
   ```bash
   git clone https://github.com/mohamadibf/gestion-livres-frontend.git
   cd frontend
   npm install
   cp .env.example .env
   # Modifier VITE_API_URL dans .env :
   VITE_API_URL=http://localhost:8000/api
   npm run dev

4. **Structures du Projet**

src/
├── components/      # Composants UI réutilisables
├── pages/           # Pages
├── services/        # Communication API
├── App.jsx          # Routes principales
└── main.jsx         # Point d'entrée

5. **Commandes Utiles**


npm run dev    # Port 3000
npm run build  # Build production
npm run test   # Lance les tests

6. **Commandes Utiles**

Console navigateur (F12)
Onglet "Network" pour les requêtes
Logs dans la console Vite
