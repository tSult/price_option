

const PriceOption = () => {
    
         const pricing_options= [
          {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
              "Access to gym during off-peak hours",
              "Use of cardio and weight equipment",
              "Locker room access",
              "Free fitness assessment"
            ]
          },
          {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
              "Unlimited gym access",
              "Access to group fitness classes",
              "Use of cardio and weight equipment",
              "Locker room with sauna access",
              "One free personal training session per month"
            ]
          },
          {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
              "24/7 gym access",
              "All group fitness classes included",
              "Access to swimming pool & spa",
              "Full locker room and sauna access",
              "Two free personal training sessions per month",
              "Nutritional consultation"
            ]
          },
          {
            "id": 4,
            "name": "VIP Plan",
            "price": 119.99,
            "features": [
              "24/7 gym access with priority entry",
              "All group fitness and specialty classes",
              "Unlimited personal training sessions",
              "Private locker and shower facilities",
              "Swimming pool, spa, and massage therapy access",
              "Customized meal and workout plans"
            ]
          }
        ]
      
      
    return (
        <div>
            <h2 className="text-5xl "> best price</h2>
            {
                PriceOption.map(option=> <PriceOption key={option.id} Option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOption;