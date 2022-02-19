const ProjectRequirements = () => {

    return (
      <div>  
        <div className="mb-5 px-2">

            <div className="mb-1">
            <p className="font-medium">Project</p>
            <p>I <span className="text-bold">[ArtistName]</span> (Contractor) will make [ProjectName] for the owner of the accepting wallet address.</p>
            </div>

            <div className="mb-1">
            <p className="font-medium">Description</p>
            <p>[Description]</p>
            </div>


            <div className="mb-1">
            <p className="font-medium">Legal assignment</p>
            <p>The Contractor will assign rights according to [C00]</p>
            </div>


            <div className="flex justify-between mb-1">
            <p className="font-medium">Gas fees</p>
            <p>[2.50]</p>
            </div>
            <div className="flex justify-between mb-1">
            <p className="font-medium">Our fee</p>
            <p>[50.00]</p>
            </div>
            <div className="flex justify-between">
            <p className="font-medium">Royalties</p>
            <p>[50.00]</p>
            </div>
            <div className="flex justify-end">
            <div className="w-6/12 h-px bg-darky my-1" />
            </div>
            <p className="text-right">[-177.50]</p>
        </div>

      </div>
     )

}

export default ProjectRequirements