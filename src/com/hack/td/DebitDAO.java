package com.hack.td;

import java.util.HashMap;
import java.util.Map;

public class DebitDAO {
	
	private static final Map<String, DebitInfo> infoMap = new HashMap<String, DebitInfo>();
	
	 static {
		initInfo();
	}
	
	private static void initInfo(){
		DebitInfo d1 = new DebitInfo("00076834583919","05-12-2018",1250);
		DebitInfo d2 = new DebitInfo("00015485958556","06-12-2018",10050);
		
		infoMap.put(d1.getAccountnumber(), d1);
		infoMap.put(d2.getAccountnumber(), d2);
		
	}
	
	   @SuppressWarnings("unlikely-arg-type")
	public static DebitInfo getinfo(String accountnumber) {
	        return infoMap.get(accountnumber);
	    }
}
