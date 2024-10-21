import {searchResult} from "../type";

export async function getRepositoryList(searchQuery: string = 'TS', page:string| number): Promise<searchResult> {

    let params = new URLSearchParams({
        language: "TS",
        sort: "stars",
        order: "desc",
        per_page:"32",
       });

    params.append("q", searchQuery);
    params.append("page", page.toString());

    const response = await fetch(
        `https://api.github.com/search/repositories?${params}`
    );
    return response.json();
}

