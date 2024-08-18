import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Articles/Home';
import Articles from './components/Articles/Articles';
import ArticleDetail from './components/Articles/ArticleDetail';
import { ContentfulProvider } from '../src/Context/Contentful';

function App() {
    return (
        <ContentfulProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/:category" element={<Articles />} />
                        <Route path="/article/:id" element={<ArticleDetail />} />
                    </Route>
                </Routes>
            </Router>
        </ContentfulProvider>
    );
}

export default App;