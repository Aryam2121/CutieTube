export function VideoCard(props: any) {
    return (
      <div>
        <img src="/photo.jpg" className="rounded-xl" alt="Thumbnail" ></img>
  
        <div className="grid grid-cols-12 p-0">
          <div className="col-span-1">
            <img className="rounded-full w-10 h-10-mt-2 " src={props.image} alt="Channel Logo" />
          </div>
  
          <div className="col-span-11 pl-1">
            <div>
             {props.title}
            </div>
            <div className="col-span-11 text-gray-400 text-base pl-2">{props.author}</div>
            <div className="col-span-11 text-gray-400 text-base pl-2">{props.views} |{props.timestamp}</div>
          </div>
        </div>
      </div>
    );
  }
  
