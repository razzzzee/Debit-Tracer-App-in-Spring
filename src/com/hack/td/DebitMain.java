package com.hack.td;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/debtinfolist")
public class DebitMain {
	
	
		@GET
	    @Path("/{accountnumber}")
	    @Produces(MediaType.APPLICATION_JSON)
		public DebitInfo getDebitInfo(@PathParam("accountnumber") String accountnumber) {
			return DebitDAO.getinfo(accountnumber);
			
		}
		
		
		@GET
		@Path("/accountList")
		@Produces(MediaType.APPLICATION_JSON)
		public List<Account> getTrackInJSON() {
			List<Account> listPerson = new ArrayList<>();
			Account p1 = new Account();
			p1.setAccountID("00076834583919");
			p1.setBankName("HDBC");
			
			Account p2 = new Account();
			p2.setAccountID("00015485958556");
			p2.setBankName("ICICI Bank");
			
			Account p3 = new Account();
			p3.setAccountID("21547855245522");
			p3.setBankName("Axis");
			//Account p4 = new Account();
			
			listPerson.add(p1);
			listPerson.add(p2);
			listPerson.add(p3);
			//listPerson.add(p4);
			//listPerson.add(p5);
			return listPerson;
		}
		
	    
		
	}

