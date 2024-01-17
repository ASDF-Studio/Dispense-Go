import { useSearchParams } from "next/navigation"

export const useQueryString = (param: any) => {
    const searchParams = useSearchParams(param)
    const queryParam = searchParams.get("filter")

    return {
        param: queryParam
    }
}