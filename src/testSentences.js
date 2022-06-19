

var testSentences = {
    sentExamples : [
        {
            list1: [{ name: "Yo" }, { name: "Voy" }, { name: "a" }, { name: "salir" }],
            list2: [{ name: "I" }, { name: "am" }, { name: "going" }, { name: "to" }, { name: "leave" }, ],
            list2Test: [{ name: "I" }, { name: "am" }, { name: "going" }, { name: "to" }, { name: "leave" }, ]
        },
        {
            list1: [{ name: "Yo" }, { name: "Voy" }, { name: "a" }, { name: "comer" }, { name: "ahora" }],
            list2: [{ name: "I" }, { name: "am" }, { name: "going" }, { name: "to" }, { name: "eat" }, { name: "now"}],
            list2Test: [{ name: "I" }, { name: "am" }, { name: "going" }, { name: "to" }, { name: "eat" }, { name: "now"}]
        },
    ],
    getExample() {
        const exampleIdx = this.randomIntFromInterval(0, this.sentExamples.length-1);
        console.log(`getExample: {exampleIdx}`);
        let example = this.sentExamples[exampleIdx];
        example.list2 = this.scramble(example.list2);
        return example;
    },
    scramble(sent) {
        let scrambledSent = [];
        console.log('otherFunction');
        const len = sent.length;
        for(var i=0; i<len; i++) {
            let rnum = this.randomIntFromInterval(0, sent.length-1);
            //console.log(sent.length-1, rnum);
            scrambledSent.push(sent[rnum]);
            sent.splice(rnum,1); //remove chosen element
            //console.dir(sent);
        }
        console.dir(scrambledSent);
        return scrambledSent;
    },
    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

export default testSentences;