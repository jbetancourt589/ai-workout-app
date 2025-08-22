import WorkoutDay from "../../components/workout";

export default function Push(){



return(


    <WorkoutDay
    title = "PUSH"
    day = {1}
    subtitle = "  All pushing movements for upper body strength and size."
    muscleGroups={["Chest","Tricep","Shoulders"]}
    exercises={[
        {name :"Incline Press Variation"},
        {name :"Flat Press/Fly Variation"},
        {name:"Tricep Pushdown"},
        {name: "Overhead Tricep Extension "},
        {name: "Shoulder Lateral Raises"},

        ]}
        />
)
}/*  */
