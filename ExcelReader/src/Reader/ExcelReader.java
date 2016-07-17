package Reader;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelReader {
	
	String path;
	FileInputStream fis = null;
	XSSFWorkbook workbook = null;
	XSSFSheet sheet = null;
	XSSFRow row = null;
	XSSFCell cell= null;
	
	//Constructor
	public ExcelReader() throws IOException
	{
		path = System.getProperty("user.dir") + "\\Testdata\\Testdata.xlsx";
		fis = new FileInputStream(path);
		workbook = new XSSFWorkbook(fis);
		//sheet = workbook.getSheetAt(0);
	}
	
	//To get number of rows
	public int numberOfRows(String sheetname)
	{
		//int index = workbook.getSheetIndex(sheetname);
		//sheet = workbook.getSheetAt(index);
		sheet= workbook.getSheet(sheetname);
		return (sheet.getLastRowNum()+1);
	
	}
	
	public int numberOfcolumn(String sheetname)
	{
		sheet= workbook.getSheet(sheetname);
		row = sheet.getRow(0);
		return (row.getLastCellNum());
		
			}
	public String cellvalue (String sheetname, int row1, int column)
	{
		sheet= workbook.getSheet(sheetname);
		row = sheet.getRow(row1);
		cell=row.getCell(column);
		return cell.getStringCellValue();
		
		
		
	
		
	}
	
	
	public static void main (String args[]) throws IOException
	{
	
		ExcelReader reader = new ExcelReader();
		System.out.println(reader.numberOfRows("puvi"));
		System.out.println(reader.numberOfcolumn("puvi"));
		
		System.out.println(reader.cellvalue("puvi", 2, 0));
		
	}
}
	
	
	
