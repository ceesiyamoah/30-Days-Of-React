const ages = [
	31,
	26,
	34,
	37,
	27,
	26,
	32,
	32,
	26,
	27,
	27,
	24,
	32,
	33,
	27,
	25,
	26,
	38,
	37,
	31,
	34,
	24,
	33,
	29,
	26,
];
class Statistics {
	constructor(sample) {
		this.sample = sample;
	}
	sortSample() {
		this.sample.sort();
	}
	getCount() {
		return this.sample.length;
	}
	getSum() {
		return this.sample.reduce((total, number) => (total += number), 0);
	}
	getMin() {
		this.sortSample();
		return this.sample[0];
	}
	getMax() {
		this.sortSample();
		return this.sample[this.sample.length - 1];
	}
	getRange() {
		return this.getMax() - this.getMin();
	}
	getMean() {
		return this.getSum() / this.sample.length;
	}
	getMedian() {
		this.sortSample();
		return this.sample.length % 2 == 0
			? (this.sample[this.sample.length / 2 - 1] +
					this.sample[this.sample.length / 2]) /
					2
			: this.sample[parseInt(this.sample.length / 2)];
	}
	getVariance() {
		const mean = this.getMean();
		const individualVariance = this.sample.map((item) =>
			Math.pow(item - mean, 2)
		);
		const VarianceSum = individualVariance.reduce(
			(total, number) => (total += number),
			0
		);
		return VarianceSum / this.sample.length;
	}
	getStandardDeviation() {
		return Math.sqrt(this.getVariance());
	}
	getFrequencyDistribution() {
		const fdset = {};
		for (let i in this.sample) {
			fdset[this.sample[i]] = (fdset[this.sample[i]] || 0) + 1;
		}
		return fdset;
	}
}

const test = new Statistics(ages);
test.sortSample();
console.log(ages.sort());
console.log(test.getFrequencyDistribution());
