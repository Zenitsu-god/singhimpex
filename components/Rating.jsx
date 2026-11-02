import { Star } from "lucide-react";

const Rating = ({ value = 4 }) => {

    return (
        <div className="flex items-center gap-0.5">

            {Array.from({ length: 5 }, (_, i) => (

                <Star
                    key={i}
                    size={16}
                    className={`transition-colors ${
                        value > i
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300"
                    }`}
                />

            ))}

        </div>
    );
};

export default Rating;