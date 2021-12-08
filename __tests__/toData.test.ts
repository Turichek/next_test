import { ChangeDataToArr, ChangeDataToSingle } from '../components/helpers/toData';
import { resDataArr, resDataSingle } from '../test.data/data';

describe('ChangeDataToArr tests', () => {
  test("check length", () => {
    expect(ChangeDataToArr(resDataArr)).toHaveLength(20);
  });

  test("check properties", () => {
    const first = ChangeDataToArr(resDataArr)[0];

    expect(first).toHaveProperty('id');
    expect(first).toHaveProperty('attributes');
    expect(first).toHaveProperty('attributes.canonicalTitle');
    expect(first).toHaveProperty('attributes.description');
    expect(first).toHaveProperty('attributes.ageRatingGuide');
    expect(first).toHaveProperty('attributes.episodeCount');
    expect(first).toHaveProperty('attributes.episodeLength');
    expect(first).toHaveProperty('attributes.posterImage');
    expect(first).toHaveProperty('attributes.startDate');
  });
})

describe('ChangeDataToSingle tests', () => {
  test("check propertis", () => {
    const item = ChangeDataToSingle(resDataSingle);

    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('attributes');
    expect(item).toHaveProperty('attributes.canonicalTitle');
    expect(item).toHaveProperty('attributes.description');
    expect(item).toHaveProperty('attributes.ageRatingGuide');
    expect(item).toHaveProperty('attributes.episodeCount');
    expect(item).toHaveProperty('attributes.episodeLength');
    expect(item).toHaveProperty('attributes.posterImage');
    expect(item).toHaveProperty('attributes.startDate');
  });
})