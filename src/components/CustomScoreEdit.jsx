export default function CustomScoreEdit() {
    const [scoreTuning, setScoreTuning] = useState({
        carbon_footprint: 1,
        responsible_sourcing: 1,
        labor_standards: 1,
    });

    // const handleSLi

    return (
        <div>
            <h3>weight of attributes for overall score</h3>
            <h4>carbon_footprint</h4>
            <input type="range" min="0" max="1" name="carbon_footprint" id=""/>
            <br />
            <br />
            <h4>responsible_sourcing</h4>
            <input type="range" name="responsible_sourcing" id="" />
            <br />
            <br />
            <h4>labor_standards</h4>
            <input type="range" name="labor_standards" id="" />
        </div>
    )
}