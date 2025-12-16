// import React from 'react';

// const CreateMeals = () => {
//     return (
//         <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 rounded-2xl shadow-md">
//             <h2 className="text-[32px] font-bold mb-6">
//                 Create New Meal
//             </h2>

//             <form className="grid md:grid-cols-2 gap-6">

//                 {/* Food Name */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Food Name
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Food name here..."
//                         className="w-full input input-bordered"
//                         required
//                     />
//                 </div>

//                 {/* Chef Name */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Chef Name
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Chef name here..."
//                         className="w-full input input-bordered"
//                         required
//                     />
//                 </div>

//                 {/* Image Upload */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Meal Image
//                     </label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         className="file-input file-input-bordered w-full"
//                         required
//                     />
//                 </div>

//                 {/* Price */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Price (Tk)
//                     </label>
//                     <input
//                         type="number"
//                         placeholder="Price here"
//                         className="w-full input input-bordered"
//                         required
//                     />
//                 </div>

//                 {/* Estimated Delivery Time */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Estimated Delivery Time
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Delivery time here..."
//                         className="w-full input input-bordered"
//                         required
//                     />
//                 </div>

//                 {/* Chef Experience */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Chef Experience
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Your experience here..."
//                         className="w-full input input-bordered"
//                         required
//                     />
//                 </div>

//                 {/* Ingredients */}
//                 <div className="md:col-span-2">
//                     <label className="block text-sm font-medium mb-1">
//                         Ingredients
//                     </label>
//                     <textarea
//                         rows="4"
//                         placeholder="Ingredients here..."
//                         className="w-full textarea textarea-bordered"
//                         required
//                     ></textarea>
//                 </div>

//                 {/* Chef ID (Auto) */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         Chef ID
//                     </label>
//                     <input
//                         type="text"
//                         value="CH-203"
//                         readOnly
//                         className="w-full input input-bordered bg-base-200 cursor-not-allowed"
//                     />
//                 </div>

//                 {/* User Email (Auto) */}
//                 <div>
//                     <label className="block text-sm font-medium mb-1">
//                         User Email
//                     </label>
//                     <input
//                         type="email"
//                         value="chef@email.com"
//                         readOnly
//                         className="w-full input input-bordered bg-base-200 cursor-not-allowed"
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <div className="md:col-span-2">
//                     <button
//                         type="submit"
//                         className="w-full button2 py-3 rounded-xl font-semibold"
//                     >
//                         Create Meal
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CreateMeals;

import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const CreateMeals = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // 🔥 SUBMIT HANDLER
    const onSubmit = async (data) => {

        // image file
        const imageFile = data.image[0];

        // assignment friendly: convert to base64
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);

        reader.onloadend = async () => {
            const mealInfo = {
                foodName: data.foodName,
                chefName: data.chefName,
                image: reader.result, // base64 image
                price: parseFloat(data.price),
                deliveryTime: data.deliveryTime,
                experience: data.experience,
                ingredients: data.ingredients,
                chefId: user?.chefId,
                chefEmail: user?.email,
                createdAt: new Date(),
            };

            const res = await axiosSecure.post('/meals', mealInfo);

            if (res.data.insertedId) {
                alert("Meal created successfully!");
                reset();
            }
        };
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 rounded-2xl shadow-md">
            <h2 className="text-[32px] font-bold mb-6">
                Create New Meal
            </h2>

            {/* 🔥 only added handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">

                {/* Food Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Food Name
                    </label>
                    <input
                        type="text"
                        placeholder="Food name here..."
                        className="w-full input input-bordered"
                        {...register("foodName", { required: true })}
                    />
                </div>

                {/* Chef Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Chef Name
                    </label>
                    <input
                        type="text"
                        placeholder="Chef name here..."
                        className="w-full input input-bordered"
                        {...register("chefName", { required: true })}
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Meal Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                        {...register("image", { required: true })}
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Price (Tk)
                    </label>
                    <input
                        type="number"
                        placeholder="Price here"
                        className="w-full input input-bordered"
                        {...register("price", { required: true })}
                    />
                </div>

                {/* Delivery Time */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Estimated Delivery Time
                    </label>
                    <input
                        type="text"
                        placeholder="Delivery time here..."
                        className="w-full input input-bordered"
                        {...register("deliveryTime", { required: true })}
                    />
                </div>

                {/* Experience */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Chef Experience
                    </label>
                    <input
                        type="text"
                        placeholder="Your experience here..."
                        className="w-full input input-bordered"
                        {...register("experience", { required: true })}
                    />
                </div>

                {/* Ingredients */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                        Ingredients
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Ingredients here..."
                        className="w-full textarea textarea-bordered"
                        {...register("ingredients", { required: true })}
                    ></textarea>
                </div>

                {/* Chef ID */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Chef ID
                    </label>
                    <input
                        type="text"
                        value={user?.chefId || ""}
                        readOnly
                        className="w-full input input-bordered bg-base-200 cursor-not-allowed"
                    />
                </div>

                {/* User Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        User Email
                    </label>
                    <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full input input-bordered bg-base-200 cursor-not-allowed"
                    />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full button2 py-3 rounded-xl font-semibold"
                    >
                        Create Meal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateMeals;
