import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "./api/api";
import Table from "../../widgets/Table/Table";

interface LanguagesNavProps {
  selectedLanguage: string;
  onUpdateLanguage: (language: string) => void;
}

const LanguagesNav: React.FC<LanguagesNavProps> = ({
  selectedLanguage,
  onUpdateLanguage,
}) => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <select
      onChange={(e) => onUpdateLanguage(e.target.value)}
      value={selectedLanguage}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

LanguagesNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

const PopularPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [repos, setRepos] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    updateLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const updateLanguage = (selectedLanguage: string) => {
    setSelectedLanguage(selectedLanguage);
    setError(null);

    fetchPopularRepos(selectedLanguage)
      .then((repos) => {
        setRepos(repos);
        setError(null);
      })
      .catch((error) => {
        console.warn("Error fetching repos ", error);
        setError("There was an error fetching repositories");
      });
  };

  return (
    <main className="stack main-stack animate-in">
      <div className="split">
        <h1>Popular</h1>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          onUpdateLanguage={updateLanguage}
        />
      </div>

      {error && <p className="text-center error">{error}</p>}

      {repos && <Table repos={repos} />}
    </main>
  );
};

export default PopularPage;
