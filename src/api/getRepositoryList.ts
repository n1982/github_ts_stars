import {searchResult} from "../type";

export async function getRepositoryList(searchQuery: string = 'TS'): Promise<searchResult> {

    let params = new URLSearchParams({
        language: "TS",
        sort: "stars",
        order: "desc",
    });

    params.append("q", searchQuery);

    const response = await fetch(
        `https://api.github.com/search/repositories?${params}`
    );
    return response.json();
}