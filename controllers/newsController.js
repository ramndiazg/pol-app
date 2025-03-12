import News from '../models/News.js';

export const createNews = async (req, res) => {
    const { title, content, image } = req.body;

    try {
        if (req.role !== 'admin') {
            return res.status(403).json({ message: 'No autorizado' });
        }

        const news = await News.create({
            title,
            content,
            image,
            admin: req.user._id,
        });
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la noticia' });
    }
};

export const getNews = async (req, res) => {
    try {
        const news = await News.find().populate('admin', 'name');
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener noticias' });
    }
};

export const likeNews = async (req, res) => {
    try {
        if (req.role !== 'user') {
            return res.status(403).json({ message: 'No autorizado' });
        }

        const news = await News.findById(req.params.id);
        if (news.likes.includes(req.user._id)) {
            return res.status(400).json({ message: 'Ya diste like a esta noticia' });
        }
        news.likes.push(req.user._id);
        await news.save();
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al dar like' });
    }
};
