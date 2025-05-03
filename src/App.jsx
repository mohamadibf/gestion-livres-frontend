import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Books from './pages/Books'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Books />} />
                    <Route path="add" element={<AddBook />} />
                    <Route path="edit/:id" element={<EditBook />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App