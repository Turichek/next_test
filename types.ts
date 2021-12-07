export type AnimeType = {
    id: string,
    attributes: AttributesType,
}

export type AttributesType = {
    canonicalTitle: string,
    description: string,
    ageRatingGuide: string,
    episodeCount: number,
    episodeLength: number,
    posterImage: string,
    startDate: string,
}
