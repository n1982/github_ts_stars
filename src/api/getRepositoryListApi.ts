import {searchResult} from "../type";

export async function getRepositoryListApi(searchQuery: string = 'TS', page:string| number, abortController: AbortController | undefined=undefined): Promise<searchResult> {

    let params = new URLSearchParams({
        language: "TS",
        sort: "stars",
        order: "desc",
        per_page:"32",
       });

    params.append("q", searchQuery);
    params.append("page", page.toString());

    const response = await fetch(
        `https://api.github.com/search/repositories?${params}`,{
            method: "GET",
            signal:abortController?.signal
        }
    );
    return response.json();
}

