export const ChangeDataToArr = (data) => {
    const new_arr = [];
    for (let i = 0; i < data.length; i++) {
        const { id, attributes } = data[i];
        const { canonicalTitle, description, ageRatingGuide, episodeCount, episodeLength, posterImage, startDate } = attributes;

        new_arr.push({
            id,
            attributes: {
                canonicalTitle,
                description,
                ageRatingGuide,
                episodeCount,
                episodeLength,
                posterImage: posterImage.large,
                startDate,
            }
        })
    }

    return new_arr;
}

export const ChangeDataToSingle = (data) => {
    const { id, attributes } = data;
    const { canonicalTitle, description, ageRatingGuide, episodeCount, episodeLength, posterImage, startDate } = attributes;

    return {
        id,
        attributes: {
            canonicalTitle,
            description,
            ageRatingGuide,
            episodeCount,
            episodeLength,
            posterImage: posterImage.large,
            startDate,
        }
    }
}