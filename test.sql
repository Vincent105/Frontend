from a in transport_Atable_110year
where a.D020300 == 4
select new {
sum06471 =(a.D061800 > 0)? (double?)a.D060700 / (double?)a.D061800:0,
Id = a.Id
} into b
select new {
D060700_D061800 = b.sum06471 <= 0.02 ,
_06471_des = $"IF D061800 > 0 THEN D060700 / D061800 = "+ b.sum06471 != null ? Convert.ToString(b.sum06471) : "資料有空值" +" ELSE ==> 0",
Id = b.Id
} into vd
where !(vd.D060700_D061800)
