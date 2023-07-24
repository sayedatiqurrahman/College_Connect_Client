/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subTitle }) => {
    const hr = <hr className="w-96 border-2 mt-1 border-[#ff6f26] rounded-full  mx-auto" />

    return (
        <div className="my-[50px] text-center">
            <h2 className="text-3xl font-semibold text-[#ff6f26]">{title}</h2>
            {hr}
            <p>{subTitle}</p>
            {hr}
        </div>
    );
};

export default SectionTitle;