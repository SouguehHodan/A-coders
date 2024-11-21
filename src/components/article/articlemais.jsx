'use client'
import React from 'react';

const ArticlesCarousel = () => {
  // Données des articles
  const articles = [
    {
      id: 1,
      title: 'Introduction à Next.js',
      description: 'Découvrez les bases de Next.js et apprenez à construire des applications modernes.',
      image: '/nextjs.jpg',
      author: 'John Doe',
      date: '25 Octobre 2024',
    },
    {
      id: 2,
      title: 'Guide complet de Bootstrap',
      description: 'Un guide détaillé pour créer des interfaces utilisateur avec Bootstrap.',
      image: '/bootstrap.jpg',
      author: 'Jane Smith',
      date: '20 Octobre 2024',
    },
    {
      id: 3,
      title: 'Les meilleures pratiques en React',
      description: 'Apprenez les meilleures pratiques pour écrire du code React propre et performant.',
      image: '/react.jpg',
      author: 'Chris Johnson',
      date: '15 Octobre 2024',
    },
    {
      id: 4,
      title: 'Développer une API REST',
      description: 'Guide étape par étape pour créer une API RESTful avec Node.js.',
      image: '/api.jpg',
      author: 'Alex Lee',
      date: '10 Octobre 2024',
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Articles Récents2</h2>
      <div id="articlesCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicateurs */}
        <div className="carousel-indicators">
          {articles.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#articlesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Contenu du carousel */}
        <div className="carousel-inner">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card" id='carousel-inner'>
                    <img
                      src={article.image}
                      className="card-img-top"
                      alt={article.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <p className="text-muted">
                        <small>
                          Par <b>{article.author}</b>, le {article.date}
                        </small>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Lire la suite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contrôles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#articlesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#articlesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </section>
  );
};

export default ArticlesCarousel;
