import { useState } from "react";
import "./css/TrainerSearch.css";

function TrainerFilters({ onSearch }) {
    const [state, setState] = useState("");

    const states = [
        "California",
        "Nevada",
        "Oregon",
        "Washington",
        "Arizona",
        "Wyoming",
        "Colorado",
        "New Mexico",
        "Texas",
        "Kansas",
        "Nebraska",
        "Minnesota",
        "Wisconsin",
        "Illinois",
        "Michigan",
        "Ohio",
        "Pennsylvania",
        "Virginia",
        "Washington DC",
        "Maryland",
        "Vermont",
        "New Hampshire",
        "Maine",
        "Rhode Island",
        "Connecticut",
        "New Jersey",
        "Delaware",
        "Massachusetts",
        "New York",
        "Kentucky",
        "North Carolina",
        "South Carolina",
        "Georgia",
        "Alabama",
        "Florida",
        "Mississippi",
        "Tennessee",
        "Indiana",
        "Missouri",
        "Arkansas",
        "Louisiana",
        "Oklahoma",
        "Iowa",
        "South Dakota",
        "North Dakota",
        "Montana",
        "Idaho",
        "Utah",
        "Alaska",
        "Hawaii"
      ];
      
    return (
        <section className="trainer-filter-section">
            <div className="container">

                <div className="filter-heading">
                    <h2>MEET OUR TRAINERS</h2>

                    <p>
                        Find best trainers around you.
                    </p>
                </div>

                <div className="filter-wrapper">

                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="">Select State</option>

                        {states.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={() => onSearch(state)}
                    >
                        SEARCH
                    </button>

                </div>

            </div>
        </section>
    );
}

export default TrainerFilters;