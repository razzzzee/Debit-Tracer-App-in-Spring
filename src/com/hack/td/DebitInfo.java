package com.hack.td;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DebitInfo {
	
	private String accountnumber;
	private String debitInfo;
	private double debitAmount;
	private String date;
	
	   public DebitInfo(String accountnumber, String date, double debitAmount) {
	        this.accountnumber = accountnumber;
	        this.debitAmount = debitAmount;
	        this.date = date;
	    }
	
	public String getAccountnumber() {
		return accountnumber;
	}
	public void setAccountnumber(String accountnumber) {
		this.accountnumber = accountnumber;
	}
	public String getDebitInfo() {
		return debitInfo;
	}
	public void setDebitInfo(String debitInfo) {
		this.debitInfo = debitInfo;
	}
	public double getDebitAmount() {
		return debitAmount;
	}
	public void setDebitAmount(double d) {
		this.debitAmount = d;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
}
