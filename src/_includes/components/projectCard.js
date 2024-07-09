function escapeHtml (unsafe) {
    if(typeof unsafe !== 'string') return unsafe;
    return unsafe.replace(/[&<"']/g, (match) => {
      const escape = {
        '&': '&amp;',
        '<': '&lt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return escape[match];
    });
  };
  
  function projectCard (project) {
    
    var groupsString = "[";
    for (var i = 0; i < project.data.tagGroup.length; i++) {
        groupsString += project.data.tagGroup[i];
        if(i+1 < project.data.tagGroup.length){
            groupsString += ",";
        }    
    }
    groupsString += "]";
    
    let content = `
      <div class="grid-item shuffle-item" data-groups='${groupsString}'>
        <div class="image-container">
    `;
    
    if (project.data.image && project.data.image.length > 0) {
      content += `
        <img src="${escapeHtml(project.data.image)}" class="img-fluid w-100 d-block">
      `;
    }
    
    if (project.data.smallImage && project.data.smallImage.length > 0) {
      content += `
        <img src="${escapeHtml(project.data.smallImage)}" class="img-fluid w-100 d-block">
      `;
    }
    
    if (project.data.vimeo && project.data.vimeo.length > 0) {
      content += `
        
          <iframe src="${escapeHtml(project.data.vimeo)}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="aspect-ratio: 16 / 9; width: 100%" title="Showreel as 3d artists"></iframe>

        <script src="https://player.vimeo.com/api/player.js"></script>
      `;
    }
    
    if (project.data.youtube && project.data.youtube.length > 0) {
      content += `
        <iframe style="aspect-ratio: 16 / 9; width: 100%" src="${escapeHtml(project.data.youtube)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `;
    }
    
    content += `
        </div>
        <div class="overlay">
            <h4 class="mt-3">${escapeHtml(project.data.project)}</h4>
            <h6>${escapeHtml(project.data.customer)} - ${escapeHtml(project.data.year)}</h6>
            <p>${escapeHtml(project.data.description)}</p>
    `;
    if(project.data.projectLink && project.data.projectLinkSrc.length > 0){
        content += `
            <a href="${escapeHtml(project.data.projectLinkSrc)}" class="" target="_blank">⇒View Project</a>
        `;
    }
    content += `    
        </div>
      </div>
    `;
    
    return content;
  };
  
  module.exports = projectCard;