"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";

export default function Labs() {
  const [orgRepos, setOrgRepos] = useState([]);

  useEffect(() => {
    const fetchOrgRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/orgs/WebTech-PUC-Minas/repos"
        );

        const data = await response.json();
        setOrgRepos(data);
      } catch (error) {
        console.error("Erro ao obter os repositórios da organização:", error);
      }
    };

    fetchOrgRepos();
  }, []);

  return (
    <div className="main-labs">
      <section className="flex flex-col items-center">
        <h1 className="title-labs text-3xl font-bold text-secundaria text-center">Principais Labs</h1>
        <div className="wrapper-cards grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 flex flex-col items-center">
          {orgRepos.slice(0, 4).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>

      <section className="more-labs flex flex-col items-center">
        <div className="wrapper-text text-left">
          <h1 className="title-labs text-3xl font-bold text-secundaria text-center">Outros labs</h1>
          {orgRepos.slice(4).map((repo) => (
            <div key={repo.id}>
              <p className="text-wrap">
                <strong className="font-bold text-primaria">{repo.name}</strong>{" "}
                {repo.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
