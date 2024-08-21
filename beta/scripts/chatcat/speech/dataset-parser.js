function parseDataset(dataset) {
    const slicedDataset = dataset.slice(1, -1);

    const dataset_split = slicedDataset.split('\n____END____\n');
    let parsed_dataset = [];

    for (let i = 0; i < dataset_split.length; i++) {
        const section = dataset_split[i].split("\n\n");

        const values1 = section[0].split('\n');
        const values2 = section[1].split('\n');

        parsed_dataset.push(values1);
        parsed_dataset.push(values2);
    }

    return parsed_dataset;
}