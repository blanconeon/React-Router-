import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";
import {Link} from 'react-router-dom';
import { useSearchParams } from "react-router-dom";


// Import Link and useSearchParams from React Router

export default function Articles () {
  const articles = useSelector(selectArticles);

  // Grab URLSearchParams object from useSearchParams hook. `useSearchParams()` returns an array with a `URLSearchParams` object (to read query params) and a function (to update them), so we use array destructuring to access what we need. When destructuring arrays, the position of each variable matches the position of the value in the array: the first variable gets the first value, the second variable gets the second value, and so on, no matter what names you use.
  const [searchParams] = useSearchParams();
  // Get the queryParams from object returned from useSearchParams and set to `title`
  const title = searchParams.get('title');

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        { filteredArticles.map(article => (
          <li key={article.slug}>
            {/* Replace these a tags! */}
            <Link to={`/articles/${article.slug}`}>
             {article.title}
            </Link>

          </li>
        ))}
      </ul>
      <Search />
    </main>
  )
}


// The component filters the articles array first, then renders only the articles that match the filter. If no filter is present, it renders all articles.