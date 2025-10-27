package musicplayer.demo.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import musicplayer.demo.entity.SongEntity;
import musicplayer.demo.service.SongService;

@RestController
@RequestMapping("api/songs")
@CrossOrigin(origins = "*")
public class SongController {
	
	@Autowired
	private SongService songservice;

	@PostMapping("/upload")
	public ResponseEntity<String> uploadSong(@RequestParam("file") MultipartFile file, 
											@RequestParam("title") String title,
											@RequestParam("artist") String artist) throws Exception {
		
		songservice.uploadSong(file, title, artist);
		return ResponseEntity.ok("✅ Song uploaded successfully!");
	}
	@GetMapping
	public List<SongEntity> getAllSongs(){
		return songservice.getAllSongs();
	}
	@GetMapping("{id}")
	public ResponseEntity<byte[]> getSong(@PathVariable Long id){
		SongEntity song = songservice.getSongById(id);
		return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, song.getContantType()).body(song.getMusicData());
	}
	
	@GetMapping("/play/{filename}")
	public ResponseEntity<Resource> playSong(@PathVariable String filename) throws Exception{
		Path filePath = Paths.get("uploads").resolve(filename).normalize();
		Resource resource =  new UrlResource(filePath.toUri());
		
        if(!resource.exists()) {
            throw new RuntimeException("File not found: " + filename);
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("audio/mpeg")) // for mp3
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
