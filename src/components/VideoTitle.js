const VideoTitle = ({ title, overView }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overView}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-16 text-lg">▶️Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
